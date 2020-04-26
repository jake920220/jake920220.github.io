---
layout: post
title: 'jekyll & github.io 블로그 만들기'
date: 2020-04-25
categories:
  - blog
description:
image: https://jake920220.github.io/assets/images/blog-banner.jpg
image-sm: https://jake920220.github.io/assets/images/blog-banner.jpg
---

<strong>올해의 신년 목표였던 기술 블로그 개설을 다소 늦었지만 행동에 옮기기로 했다.</strong>

기술 블로그를 만들기 위해 Tistory와 medium, Github Page 등을 놓고 고민하던 중
개발자니까 까리하게 Github Page를 사용한 블로그를 만들기로 하였다.

우선 나같은 경우 Jekyll을 사용했다.

Jekyll을 사용한 이유는 이전에 Github Page로 블로그가 아닌 포트폴리오 페이지를 호스팅하고 있었는데

한 번 Ruby Gem + Jekyll을 사용해서 페이지를 호스팅해 본 경험이 있어서였다.

<br/>

<br/>

<h2>
    1. Ruby 설치하기
</h2>

일전에는 맥북으로 작업했으나 이번에는 데스크탑으로 작업했으므로 Windows 기준으로 설치과정을

정리해보았다.

나의 경우 [RubyInstaller](https://rubyinstaller.org/downloads/) 에서 설치했다.

<figure>
    <img src="/assets/images/2020-04-25-jekyll/ruby-site.png" />
    <figcaption>With Devkit의 Stable버전인 2.6.6-1 버전을 설치</figcaption>
</figure>

<br/>

<br/>

<h2>
    2. Jekyll Theme 적용시키기
</h2>

블로그를 처음부터 만들기에는 오버헤드가 크므로 다른 사람들이 만들어 둔 Jekyll 테마를 찾아보기로 하였다.

구글에 Jekyll Theme를 검색하였고 나같은 경우 [Trophy](https://github.com/thomasvaeth/trophy-jekyll)라는 마음에 드는 테마를 찾아서 적용하기로 했다.

일전에는 해당 테마의 Git을 Fork떠서 작업했으나 이번에는 큰 차이가 없을 거라 생각하여 Clone을 뜬 후 Remote Origin을 변경해주기로 하였다.

<figure>
    <img src="/assets/images/2020-04-25-jekyll/2.png" />
    <figcaption>다음 Repository의 Clone을 누른다! (fork를 떠도 상관없음)</figcaption>
</figure>

원하는 곳에 Repository를 clone 뜬다.

```
$ git clone https://github.com/thomasvaeth/trophy-jekyll.git blog
Cloning into 'blog'...
remote: Enumerating objects: 1311, done.
Receiving objremote: Total 1311 (delta 0), reused 0 (delta 0), pack-reused 1311
Receiving objects: 100% (1311/1311), 2.06 MiB | 1.77 MiB/s, done.
Resolving deltas: 100% (595/595), done.
```

<br/>

<br/>

<h2>
    3. 로컬 서버 실행시키기
</h2>

내가 받은 Trophy 테마의 README.md 를 설치와 테마 수정등에 대한 설명이 적혀있다.

설치를 위해 Installation을 살펴보면 다음과 같이 한 줄 적혀있다.

<figure>
    <img src="/assets/images/2020-04-25-jekyll/3.png" />
</figure>

한 번 프로젝트를 Clone 한 곳에 들어가 그대로 터미널에 입력해준다.

```
PS C:\Users\SH\Desktop\projects\blog> bundle install
Fetching gem metadata from https://rubygems.org/...........
Fetching gem metadata from https://rubygems.org/.
Resolving dependencies...
Using public_suffix 3.0.3
Using addressable 2.6.0
Using execjs 2.7.0
Using autoprefixer-rails 9.4.8
Using bundler 1.17.2
Using colorator 1.1.0
Using concurrent-ruby 1.1.4
Using eventmachine 1.2.7 (x64-mingw32)
Using http_parser.rb 0.6.0
Using em-websocket 0.5.1
Using ffi 1.10.0 (x64-mingw32)
Using forwardable-extended 2.6.0
Using i18n 0.9.5
Using rb-fsevent 0.10.3
Using rb-inotify 0.10.0
Using sass-listen 4.0.0
Using sass 3.7.3
Using jekyll-sass-converter 1.5.2
Using ruby_dep 1.5.0
Using listen 3.1.5
Using jekyll-watch 2.1.2
Using kramdown 1.17.0
Using liquid 4.0.1
Using mercenary 0.3.6
Using pathutil 0.16.2
Using rouge 3.3.0
Using safe_yaml 1.0.5
Using jekyll 3.8.5
Using jekyll-paginate 1.1.0
Using jekyll-sitemap 1.2.0
Using octopress-autoprefixer 2.0.1
Using tzinfo 2.0.2
Using tzinfo-data 1.2020.1
Bundle complete! 5 Gemfile dependencies, 33 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
```

Install이 끝났다.

이제 로컬 서버에서의 실행을 위해 jekyll 프로젝트를 run시키는 명령어를 입력한다.

```
PS C:\Users\SH\Desktop\projects\blog> bundle exec jekyll serve
Configuration file: C:/Users/SH/Desktop/projects/blog/_config.yml
            Source: C:/Users/SH/Desktop/projects/blog
       Destination: C:/Users/SH/Desktop/projects/blog/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 1.75 seconds.
  Please add the following to your Gemfile to avoid polling for changes:
    gem 'wdm', '>= 0.1.0' if Gem.win_platform?
 Auto-regeneration: enabled for 'C:/Users/SH/Desktop/projects/blog'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

확인을 위해 브라우저에 http://127.0.0.1:4000로 접근하여 확인해본다.

<figure>
    <img src="/assets/images/2020-04-25-jekyll/4.png" />
    <figcaption>다음과 같이 127.0.0.1:4000에 화면이 떴다면 성공!</figcaption>
</figure>

<br/>

<br/>

<h2>
    4. Github Page에 호스팅하기
</h2>

여기까지 왔다면 이제 내가 만든 Repository에 호스팅을 하는 일만 남았다.

깃허브에 접속해서 Repository를 생성해주자.

<figure>
    <img src="/assets/images/2020-04-25-jekyll/5.png" />
    <figcaption>나는 이미 블로그를 만들기위해 Repo를 팠기 때문에 already exists로 나온다.</figcaption>
</figure>

깃허브 Repo를 만들 때에는 {자기 계정}.github.io로 이름지어 줍니다.

이전 포트폴리오 사이트를 Github Page에 호스팅 했을 때에는 {계정}.github.com 으로 Repo네임을 지었어도 호스팅이 정상적으로 됐었던 것 같은데 정확히는 모르겠다..!

아까 Clone받은 프로젝트를 이 Repo에 밀어넣을 것이므로 README.md 를 생성할 필요는 없다.

<br/>

아까 클론받은 프로젝트 위치에서 다음 명령어를 입력하면 다음과 같이 theme를 만든 사람의 github 주소가 origin으로 잡혀있는 것을 확인할 수 있다.

```
$ git remote -v
origin  https://github.com/thomasvaeth/trophy-jekyll.git (fetch)
origin  https://github.com/thomasvaeth/trophy-jekyll.git (push)

```

다음 명령어를 입력해 origin을 변경해준다

```
$ git remote set-url origin https://github.com/jake920220/jake920220.github.io
```

다시 git remote -v 를 입력하면 자신이 변경한 곳의 Repo 주소로 변경됐음을 확인할 수 있다.

이제 내가 변경한 origin으로 이 프로젝트를 push해주기만 하면 된다.

```
$ git commit -m "initial commit"
$ git push -f
```

그리고 내가 만든 Repo명을 도메인에 쳐서 정상적으로 호스팅이 되는지 확인해주면 된다.
(시간이 1~3분 정도 걸릴 수 있다.)

<figure>
    <img src="/assets/images/2020-04-25-jekyll/6.png" />
    <figcaption>정상적으로 올라간 것을 확인할 수 있다.</figcaption>
</figure>

<br/>

<br/>

<br/>

<br/>

<center>
    <figure>
    <img src="/assets/images/2020-04-25-jekyll/7.jpg" style="width: 400px;" />
    <figcaption>야! 블로그 만들기 쉽다.</figcaption>
</figure>
</center>

아직 댓글란이나 페이징, 폰트, 스타일 등을 조금 더 손 볼 필요가 있겠지만 일단 블로그를 만들고 첫 포스팅을 하는 데 성공했다.

앞으로 꾸준히 포스팅 할 수 있기를 기원해본다..!
