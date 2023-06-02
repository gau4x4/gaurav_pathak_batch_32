const sendingAmount = function (env, amt = 100) {
  switch (env) {
    case "dev":
      return amt * 1.1;
    case "Test":
      return amt * 1.2;
    case "Stage":
      return amt * 1.3;
    default:
      return amt * 1.05;
  }
  //   if (env === "dev") {
  //     return amt * 1.1;
  //   } else if (env === "Test") {
  //     return amt * 1.2;
  //   } else if (env === "Stage") {
  //     return amt * 1.3;
  //   } else {
  //     return amt * 1.05;
  //   }
};
const updatedData =
  Math.round((sendingAmount("dev", 12) + Number.EPSILON) * 100) / 100;

document.write(updatedData);
