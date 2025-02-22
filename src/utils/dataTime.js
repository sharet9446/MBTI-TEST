import { format } from "date-fns";

const now = new Date();
export const formattedDate = format(now, "yyyy-MM-dd HH:mm:ss");
