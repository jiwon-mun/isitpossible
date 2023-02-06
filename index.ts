import execa from "execa";

const { stdout } = execa(`git`, [`remote`, `-v`], {
  cwd: ".",
});

stdout &&
  stdout.addListener("data", async (data) => {
    const remotes: Array<string> = data.toString().split("\n");

    const remote = remotes
      .find((value) => {
        return value.includes("jiwon-mun/isitpossible.git");
      })
      ?.split("\t")!;

    const url = remote[remote.length - 1];
    const tagName = Math.random().toString().slice(0, 5);
    await execa("git", ["tag", tagName]);
    console.log("url", url);
    // await execa("git", [`push`, url, tagName], {
    //   stdout: process.stdout,
    // });
    console.log("remote");
  });

export default "test";
