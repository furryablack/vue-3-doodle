const fs = require('fs');
const path = require('path');

const DEFAULT_PLACE = './';
const IO = exports.IO = {};

IO.getSubDirs = function getSubDirs(FOLDER_PATH) {
  return fs.readdirSync(FOLDER_PATH).filter(
    (name) => fs.lstatSync(path.join(FOLDER_PATH, name)).isDirectory(),
  );
};

IO.resolvePath = function resolvePath(place = DEFAULT_PLACE) {
  return path.resolve(place);
};

IO.normalizePath = function normalizePath(place = DEFAULT_PLACE) {
  return path.normalize(place);
};

IO.resolveRealPath = function resolveRealPath(place = DEFAULT_PLACE) {
  return IO.normalizePath(fs.realpathSync(IO.resolvePath(place)));
};