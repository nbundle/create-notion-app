import ms from "ms";

import { exec } from "./async-exec";

export async function installDependencies(
  projectDirectory: string
): Promise<void> {
  const internal = setInterval(() => {
    console.log(
      "Hang on, packages are still being installed, your connection may be a bit slow…"
    );
  }, ms("20s"));
  await exec(`yarn install`, { cwd: projectDirectory });
  clearInterval(internal);
}
