import * as z from "zod";
import { createTsForm } from "@ts-react/form";

import TextField from "./FormComponents/TextField";
import CheckboxField from "./FormComponents/CheckboxField";
import NumberField from "./FormComponents/NumberField";

// create the mapping
const mapping = [
  [z.string(), TextField] as const,
  [z.boolean(), CheckboxField] as const,
  [z.number(), NumberField] as const,
] as const; // 👈 `as const` is necessary

// A typesafe React component
export const TestForm = createTsForm(mapping);
