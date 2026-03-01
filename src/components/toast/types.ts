export type ToastVariant = "success" | "info" | "error";

export type Toast = {
  id: string;
  title: string;
  message?: string;
  variant: ToastVariant;
};
