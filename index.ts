import execa from "execa";

const { stdout } = execa(`git`, [`remote`, `-v`], {
  cwd: ".",
});

stdout &&
  stdout.addListener("data", (data) => {
    const remotes: Array<string> = data.toString().split("\n");

    const remote = remotes
      .find((value) => {
        return value.includes("birdviewdev/fe-monorepo.git");
      })
      ?.split("\t")!;
    console.log("remote", remote[remote.length - 1]);
  });

export default "test";
