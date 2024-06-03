import webExt from "web-ext";

async function validate() {
    console.log("Validating the firefox extension.");
  const result = await webExt.cmd.lint({
    sourceDir: "firefox",
    output: "json",
  }, {
    shouldExitProgram: false,
  });
  const { count } = result;

  if (count > 0) {
    console.error(
      "Errors found in the extension. Please fix them before proceeding."
    );
    console.error("===============================================");
    console.error(JSON.stringify(result, null, 2));
    console.error("===============================================");
    console.error("Exiting the process...");
    process.exit(1);
  }
  console.log("No errors found in the firefox extension. Proceeding...");

  console.log("No validation available for the chrome extension.");
  process.exit(0);
}

validate();
