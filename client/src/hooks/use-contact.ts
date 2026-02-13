import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import type { InsertMessage } from "@shared/schema";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Validate data against schema before sending
      const validated = api.contact.submit.input.parse(data);
      
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        // Try to parse error message from JSON, fallback to generic
        try {
          const errorData = await res.json();
          // Attempt to validate against 400 or 500 schemas
          const parsed400 = api.contact.submit.responses[400].safeParse(errorData);
          if (parsed400.success) throw new Error(parsed400.data.message);
          
          const parsed500 = api.contact.submit.responses[500].safeParse(errorData);
          if (parsed500.success) throw new Error(parsed500.data.message);
          
          throw new Error("Failed to send message");
        } catch (e) {
          throw new Error(e instanceof Error ? e.message : "Network error");
        }
      }

      return api.contact.submit.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
