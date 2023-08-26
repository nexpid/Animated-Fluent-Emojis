import { readdir, rename } from "fs/promises";
import { join } from "path";

for (const category of await readdir("../", "Emojis")) {
  if (category.endsWith(".mjs")) continue;
  for (const emoji of await readdir(join("../", "Emojis", category))) {
    const nfile = (emoji[0].toUpperCase() + emoji.slice(1).toLowerCase())
      .replace(/dark/, "Dark")
      .replace(/default/, "Default")
      .replace(/light/, "Light")
      .replace(/medium/, "Medium")
      .replace(/medium-dark/, "Medium-Dark")
      .replace(/medium-light/, "Medium-Light");
    await rename(
      join("../", "Emojis", category, emoji),
      join("../", "Emojis", category, nfile)
    );
  }
}
