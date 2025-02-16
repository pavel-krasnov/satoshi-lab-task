import { uuid } from "expo-modules-core";

export function getId() {
  return uuid.v4();
}
