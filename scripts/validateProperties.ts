import stylelintConfig from "@/stylelint.config.mjs";
import path from "path";
import fs from "fs";

validateProperties();

function validateProperties() {
  const stylelintConfigProperties = stylelintConfig.rules![
    "order/properties-order"
  ][0] as string[];

  const targetFilePath = path.join(
    process.cwd(),
    "assets",
    "files",
    "non-custom-properties.txt",
  );
  const nonCustomProperties = fs
    .readFileSync(targetFilePath, "utf8")
    .trim()
    .split("\n")
    .map((line) => line.trim());

  let success = true;
  if (stylelintConfigProperties.length !== nonCustomProperties.length) {
    console.error(
      `stylelintConfigProperties.length: ${stylelintConfigProperties.length} must be the same as nonCustomProperties.length: ${nonCustomProperties.length}.`,
    );
    success = false;
  } else {
    stylelintConfigProperties.forEach((property, index) => {
      if (property !== nonCustomProperties[index]) {
        console.error(
          `stylelintConfigProperties[${index}]: ${property} must be the same as nonCustomProperties[${index}]: ${nonCustomProperties[index]}.`,
        );
        success = false;
      }
    });
  }
  if (!success) {
    // If you need the full array version of the non-custom properties to use in stylelint.config.mjs, uncomment the following lines.
    // const text = JSON.stringify(nonCustomProperties, null, 2);
    // console.log(text);
    process.exit(1);
  }
}
