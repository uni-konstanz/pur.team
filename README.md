# PUR website
This is the corresponding repository to https://pur.team

## Contact
This repository belongs to the PUR ("Pflegeunterstützende Robotik") project of
the University of Konstanz, FH Vorarlberg, Alterszentrum Emmersberg and Caritas
Altenhilfe Konstanz.

If you have any technical questions, please contact [Klaus Herberth, University of Konstanz](mailto:klaus.herberth@uni-konstanz.de).

## Usage
### Requirements
Make sure you have [yarn] and [jekyll] installed on your system, before you
install all dependencies with `yarn install`.

### Basic usage
To build the site, execute `jekyll build` or, if you like to use the build-in
webserver, `jekyll serve`.

### Update dependencies
Updating all dependencies is as easy as calling `yarn upgrade && yarn build`.
Please beware that all dependencies should be commited to the repository,
because Github pages is not able to get them from npm.

[yarn]: https://yarnpkg.com
[jekyll]: https://jekyllrb.com