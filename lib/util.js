var chalk = require('chalk');

exports.bump = (currentSemVersion, typesofIncrement) => {

  // Major [0]
  // Minor [1]
  // Patch [2]
  const aryVersions = currentSemVersion.split('.');

  for (let versionIndex in aryVersions) {
    aryVersions[versionIndex] = parseInt(aryVersions[versionIndex]);
  }

  if (typesofIncrement === 'patch') {
    aryVersions[2] += 1; // patch
  } else if (typesofIncrement === 'minor') {
    aryVersions[2] = 0; // patch
    aryVersions[1] += 1; // minor
  } else if (typesofIncrement === 'major') {
    aryVersions[2] = 0; // patch
    aryVersions[1] = 0; // minor
    aryVersions[0] += 1; // minor
  }

  return aryVersions.join('.');
}

//export
exports.debug = (title, obj, status) => {
  const seperator = '\n==================================\n';
  const output = seperator + title + seperator;

  const error = chalk.bold.red;
  const success = chalk.bold.green;

  console.log(error('Error!'));

  if (process.env.DEBUG) {

    if (status) {
      // This shows Success
      console.log(success(output), obj);
    }else {
      // This shows Error
      console.error(error(output), obj);
    }
  }
};
