import { supabase, tables } from "../client/supabaseClient.js";
import { statusCode } from "./statusCode.js";

export async function emailExists(email) {
  const { data, error } = await supabase
    .from(tables.newsletter)
    .select()
    .eq("email", email);
  if (error) throw new Error({ cause: statusCode.ERROR });

  if (data.length > 0) return true;

  return false;
}

export async function addEmail(email) {
  const emailExist = await emailExists(email);
  if (emailExist) return statusCode.EXISTS;
  const { data, error ,status} = await supabase
    .from(tables.newsletter)
    .insert({ email })
    .select("email");
    return statusCode.SUCCESS
}