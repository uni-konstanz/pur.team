# PUR website
This is the corresponding repository to https://pur.team

## Contact
This repository belongs to the PUR ("Pflegeunterstützende Robotik") project of
the University of Konstanz, FH Vorarlberg, Alterszentrum Emmersberg and Caritas
Altenhilfe Konstanz.

If you have any technical questions, please contact [Klaus Herberth, University
of Konstanz](mailto:klaus.herberth@uni-konstanz.de).

## Usage
### Quick start
The easiest way to build this site is by using [Docker]:

```
docker run --rm --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:3.8 jekyll build
```

In development you can also serve an instance with:

```
docker run --rm -p 127.0.0.1:4000:4000/tcp --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:3.8 jekyll serve --incremental
```

### Requirements
Make sure you have [bundler], [yarn] and [jekyll] installed on your system, before you
install all dependencies with `bundler install` and `yarn install`.

### Basic usage
To build the site, execute `bundle exec jekyll build` or, if you like to use
the built-in webserver, `bundle exec jekyll serve --incremental`.

### Update dependencies
Updating all dependencies is as easy as calling `yarn upgrade && yarn build`.
Please beware that all dependencies should be commited to the repository,
because Github pages is not able to get them from npm.

[Docker]: https://www.docker.com
[bundler]: https://bundler.io
[yarn]: https://yarnpkg.com
[jekyll]: https://jekyllrb.com
