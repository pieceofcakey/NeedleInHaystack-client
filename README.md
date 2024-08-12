<p align="center">
  <img width="400" alt="image" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/139360841/183ebf52-2a91-4e40-a381-c8ab5df22d7f">
</p>

<p align="center">
  Needle in haystack은 IT 키워드 검색시 자체 알고리즘 순위에 따라 영상을 검색해 주고 영상 속 코드 추출 기능도 제공하는 영상 기반의 검색엔진 서비스입니다.d
</p>

<div align="center">

[Deployed](https://web.nih.world)
/
[Frontend repository](https://github.com/Team-Office360/NeedleInHaystack-client)
/
[Backend repository](https://github.com/Team-Office360/NeedleInHaystack-server)

</div>

## 📒 Contents

- [🔧 Tech Stacks](#-tech-stacks)
- [🙋🏻‍♂️ Introduction](#️-introduction)
- [💪 Motivation](#-motivation)
- [🧐 How does a "Search Engine" work?](#-how-does-a-search-engine-work)
- [⛰️ Challenges](#️-challenges)
  1. [Search Algorithm](#1-search-algorithm)
  2. [Spell check feature](#2-spell-check-feature)
  3. [Extract code from playing video](#3-extract-code-from-playing-video)
  4. [Automate Crawler](#4-automate-crawler)
- [📚 What I learned](#-what-i-learned)
- [⏰ Project timeline](#-project-timeline)

<br>

## 🔧 Tech Stacks

### Client

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### Server

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

### Test

![Static Badge](https://img.shields.io/badge/vitest-8A2BE2?style=for-the-badge)
![Testing-Library](https://img.shields.io/badge/React%20Testing%20Library-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![JestDOM](https://img.shields.io/badge/Jest%20DOM-8A2BE2?style=for-the-badge)

### Deployment

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![AWS](https://img.shields.io/badge/Elastic%20Beanstalk-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

<br>

## 🙋🏻‍♂️ Introduction

바닐라 코딩 부트캠프에서 4주간 진행한 팀 프로젝트로, 웹 개발 및 코딩 관련 영상을 YouTube처럼 검색해 주는 동영상 기반 검색 엔진 서비스를 구현해 보았습니다.

저희는 단순히 데이터를 가져오기 위해 YouTube에 API 요청을 하는 것이 아니라, 동영상 데이터를 직접 크롤링하여 고유한 방식으로 자체 데이터베이스에 저장하였습니다. 그리고 수집한 데이터를 기반으로 사용자의 검색어와 가장 유사한 비디오 데이터를 렌더링하는 검색 엔진을 구현하였습니다.

<br>

## 💪 Motivation

개발 공부를 하면서 구글링은 거의 필수적으로 사용되는 도구였습니다. 특히나 요즘에는 영상 콘텐츠의 폭발적인 증가와 함께 YouTube에서 정보를 찾는 것이 새로운 검색 표준이 되어 가고 있음을 느끼게 되었습니다.

이러한 변화에 영감을 받아, 개발 관련 주제로 한정하여 YouTube와 같은 효율적인 영상 검색 경험을 제공하는 서비스를 개발하고 싶다는 생각을 하게되었습니다. 그리고 일상 속에서 너무나도 당연하게 여겨졌던 “검색”에 대해 조금 더 깊이 알아가고 싶은 욕구가 생겨 Needle in haystack 프로젝트를 시작하게 되었습니다.

<br>

## 🧐 How does a "Search Engine" work?

Google과 같은 검색 엔진은 기본적으로 다음의 세 단계로 작동합니다.

**1. 크롤링 (Crawling)**

: 크롤링은 검색 엔진이 새로운 웹 사이트나 문서를 찾으려고 시도하는 초기 단계입니다. 이 단계에서는 크롤러 또는 스파이더라고 알려진 자동화된 봇이 이 작업을 실행합니다. 이미 알고 있는 혹은 주어진 웹 페이지 URL에서 시작하여 해당 페이지에 존재하는 링크들을 따라간 다음, 연속적인 방식으로 다음 페이지에 있는 링크를 타고 갑니다. 이 프로세스를 통해 크롤러는 새로운 콘텐츠와 기존 콘텐츠를 찾아 긁어 오게 됩니다.

**2. 인덱싱 (Indexing)**

: 크롤러가 스크랩한 새로운 콘텐츠는 인덱싱이라는 프로세스를 통해 데이터베이스에 저장됩니다. 인덱싱을 생성하는 동안 컨텐츠의 내용을 분석하게 되는데, 이 분석에는 콘텐츠를 설명하는 핵심 단어와 문구, 콘텐츠 유형을 기록하는 것이 포함될 수 있습니다. 이렇게 컨텐츠를 분석하여 데이터베이스에 저장함으로써, 유저로부터 검색 쿼리가 발생되면 가장 관련도가 높은 검색 결과를 렌더할 수 있게 됩니다.

**3. 검색 엔진 (Search Engine)**

: 마지막으로 여러가지 검색 알고리즘을 통해 유저의 쿼리와 가장 관련된 데이터를 렌더합니다. 알고리즘에는 TF-IDF, BM25, BM25F 및 PageRank와 같은 다양한 순위 알고리즘을 사용하여 각 콘텐츠가 쿼리와 얼마나 관련성이 있는지 평가하게 됩니다. 이를 통해 가장 관련성이 높은 데이터를 검색 결과 페이지 상단에 표시되도록 합니다.

저희는 Google의 Puppeteer 라이브러리를 사용하여 YouTube 동영상 데이터를 크롤링하였습니다. 그리고 긁어온 정보를 데이터베이스에 저장하기 전에 추후 사용자가 검색시 빠른 데이터 검색을 위해 데이터 전처리 및 역인덱싱을 수행하였습니다. 그리고 사용자의 검색 요청을 받으면 TF-IDF, BM25, BM25F, PageRank 등 다양한 순위 알고리즘을 사용하여 가장 관련성이 높은 데이터를 먼저 렌더링하도록 구현하였습니다.

<br>

## ⛰️ Challenges

### 1. 유튜브 영상 데이터를 수집하는 크롤러 (Crawler)

위에서 설명한 방식대로 크롤링은 검색 엔진이 새로운 웹 사이트나 문서를 찾으려고 시도하는 초기 단계입니다. 이 프로세스를 통해 저희가 제작한 크롤러는 유튜브 영상 데이터(title, description, keyword, transcript, youtubeId 등)를 수집합니다.

수집한 데이터들은 키워드들은 기준으로 검색하기 위하여 역색인(inverted index) 작업을 거친 후에 DB에 저장됩니다. 해당 키워드를 가진 비디오들은 배열 형태로 저장되고 랭킹 알고리즘을 통해 구해진 점수(키워드와의 연관도)를 가집니다.

```js
const keywordSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },
  videos: {
    type: [
      {
        videoId: {
          type: Schema.Types.ObjectId,
          ref: "Video",
        },
      },
    ],
    default: [],
    required: true,
  },
});
```

#### 역색인(Inverted Index)과 랭킹 알고리즘(Ranking Algorithm)

초기에는 사용자가 검색시에 해당 키워드에 해당하는 비디오들에 대해서 랭킹 알고리즘을 이용해 점수를 구해주고 순위대로 결과를 보여주었습니다. 하지만 검색마다 점수를 구하는 로직은 시간이 많이 소요된다는 치명적인 단점이 있었습니다.

이를 해결하기 위해 크롤링과 동시에 해당 비디오의 점수를 구하고 비디오들이 담긴 배열을 내림차순을 정렬하여 저장하였습니다. 미리 DB에 점수가 구해지고 정렬되어 있기 때문에 사용자가 키워드를 검색했을 시 빠른 속도로 결과를 보여줄 수 있게 되었습니다.

<p>
  <img height="200px" alt="search-before" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/133403759/06950a9a-9110-4112-a311-7509d8139cfe">
  <img height="200px" alt="search-after" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/133403759/86b4d14c-2fb3-4139-a801-8af91125f6a7">
</p>

#### 크롤러 자동화 (automated crawler)

저희는 총 3가지 단계를 거치면서 크롤러를 수정했습니다.

<p>
  <img width="350" alt="automate crawler" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/139360841/a529031c-6034-4c6a-bbb8-63439fcf2127">
</p>

첫번째는 터미널에서 수동으로 실행하는 방법입니다. 서버 내에서 crawl.js라는 파일을 만들어 두고, entryURL값을 하드코딩으로 적어둔뒤에 직접 해당 파일을 터미널에서 실행 시켜서 돌아가게 하는 방식으로 진행했습니다.

두번째는 admin 페이지에서 UI 를 통해 크롤러 동작시키는 방법입니다. 관리자만 접근 가능한 admin 페이지를 만들어 input창에 엔트리 url을 입력하고 시작과 중지 버튼으로 웹 브라우저에서 직관적이고 유동적으로 크롤러를 관리하고 상태를 확인할 수 있도록 하였습니다.

크롤러가 동작하면서 해당 동영상 데이터를 가져와 db에 저장하거나, 크롤링시 이미 db에 있는 중복된 영상이라던가, 데이터가 충분하지 않은 경우는 db에 저장하지 못했다는 메세지를 띄어줍니다.

최종으로는 aws lambda를 활용화였습니다. 이 방법으로 이전 방법들에 있었던 문제들을 해결할 수 있었습니다.

1. 첫번째는 자동화입니다. AWS EventBridge를 사용하여 cron 표현식을 사용하여 반복 작업을 예약하여 일정 시간마다 크롤러를 작동시키도록 설정했습니다.

2. 두번째는 무한 깊이 탐색 문제입니다. 이전의 방법들은 크롤러(crawler)를 한번 실행하게 되면, 수동으로 종료할 때 까지 무한하게 돌아가는 로직이었습니다. 저희 서비스는 개발 관련 영상에 대해서 검색하고 시청할 수 있는 서비스입니다. 하지만 크롤러가 제한없이 동작하게 되면 어느 시점부터는 개발과 관련 없는 영상들까지 접근하는 문제가 생겼습니다.

사용자가 비디오를 시청하면 해당 비디오들의 id들을 DB에 저장합니다. 일정 시간마다 작동하는 크롤러(crawler)는 DB에 쌓인 비디오 id들을 순차적으로 돌면서 해당 비디오의 연관 동영상 중 상위 5개의 영상을 크롤링해오고 해당 비디오 id는 DB에서 제거됩니다. 크롤러(crawler)는 db에 비디오들의 id값들이 없거나 미리 설정된 함수 작동시간이 지나면 자동으로 종료되도록 했습니다.

### 2. 순위 도출을 위해 다양한 랭킹 알고리즘을 활용한 검색 기능 (Search Algorithm)

저희는 첫번째로 TF-IDF 알고리즘을 적용해보았습니다.

TF-IDF 알고리즘을 사용하면 콘텐츠 안에서 핵심 단어들의 중요도를 구할 수 있습니다.
TF는 한 콘텐츠에서 해당 단어가 등장한 횟수를 모든 단어가 등장한 횟수로 나눈 값으로, 단어의 빈도 수를 나타냅니다. 단어가 많이 등장할수록 그 값이 증가하게 됩니다.

IDF는 총 콘텐츠의 개수를 해당 단어가 등장하는 콘텐츠의 수로 나눈 값입니다. 해당 단어가 등장하는 콘텐츠의 수가 많아질수록 반비례하여 작아집니다. 즉 단어의 unique함, 고유값을 나타냅니다.

<p>
  <img width="500" alt="tf-idf" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/133403759/b58c2908-5484-47c4-a8df-d3127d533c1a">
</p>

TF-IDF는 단순히 이 두 값을 곱한 값으로 콘텐츠에 해당 단어가 많이 등장하고, 다른 콘텐츠에는 등장하지 않을 수록 그 값이 높아집니다.

저희는 TF-IDF를 조금 변형한 알고리즘인 BM 25알고리즘으로 변경하였습니다.
BM25알고리즘에는 상수 k1, b가 추가됩니다. 두 상수값은 빈도수의 최댓값, 문서길이의 최소값을 보장해주는 역할을 합니다.

<p>
  <img width="500" alt="bm25" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/133403759/79dcd620-e2a0-4db8-8622-c825caf5aa38">
</p>

BM25 알고리즘은 또한 문서의 길이와 전체 문서의 평균길이를 계산에 포함하여 문서 길이에 대한 정규화까지 진행하게 됩니다.
현재는 콘텐츠의 각 필드별로 값을 계산하는 방식인 BM25F알고리즘을 적용하여, 비디오에 있는 다양한 필드인 title, description, script, tag에 부여된 상대적인 중요도에 따라 무게치를 다르게 주었습니다.

다음으로 pagerank 알고리즘을 저희 검색 알고리즘에 추가했습니다.

pagerank는 웹 페이지의 중요도를 나타내는 대표적인 알고리즘입니다.
웹페이지들은 서로를 가리키는 링크들을 가지고 있습니다. 해당 페이지를 가리키는 다른 페이지들의 pagerank값을 이용하여 현재 페이지의 pagerank값을 구할 수 있습니다.
이렇게 구한 pagerank 값은 해당 웹 페이지로 도달할 확률을 나타내고, 페이지랭크 값이 높을 수록 많은 사람들이 찾는 웹페이지라고 생각할 수 있습니다.

<br>

### 3. Spell check feature

: 검색엔진을 사용하다보면 틀린 검색어에 대해서도 자동으로 수정하여 검색을 해주는 걸 본 경험이 있으실겁니다.사용자의 오타를 수정해주는 스펠링 체크 기능은 검색 엔진에 없어서는 안되는 핵심기능입니다.

저희는 biGram, soundex 알고리즘을 사용하였습니다.

두 알고리즘 모두 두 단어간의 유사도를 확인해주는 기능을 합니다.
Bigram 알고리즘은 단어의 철자를 비교하여 유사도를 분석해주고
soundex알고리즘은 단어의 발음을 비고하여 유사도를 분석합니다.
이때 사용자가 입력한 검색어와 비교해줄 단어들이 필요한데요. 저희는 그 단어들을 크롤링할 때 모았습니다.
크롤링할때 모든 단어들을 DB에 저장하고 사용자가 검색을 할 때마다 유사도가 높은 단어를 찾아주었습니다.

이 과정에서 크게 두가지 문제점이 있었습니다.

1. 첫번째로 데이터베이스에 저장된 몇 십만개의 단어들을 가져오는데 생각보다 많은 시간이 소요된다는 점이었고

2. 두번째는 크롤링하면서 모은 단어들이기 때문에 올바르지 않은 단어들이 포함되어있다는 점이었습니다.

위의 두문제를 해결하기 위해 첫번째로 정확한 단어들이 모인 영단어 라이브러리 사용하여 정확도를 높여주었습니다. 두번째로 trie 자료구조를 활용하여 사용자가 입력한 검색어가 올바른 단어인지 빠르게 판단하여 해당 경우에만 스펠링 체크 알고리즘을 사용하였습니다.
위 두가지 방법으로 속도와 정확도 성능을 개선시킬 수 있습니다.

<br>

### 4. Extract code from playing video

<p>
  <img width="350" alt="extract" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/139360841/19d22e2c-0c80-4819-9fd8-12d1252391b3">
</p>
 비디오 속 코드를 추출하기 위해서 이미지에서 텍스트를 인식하는 광학 문자 인식 기술, 즉 OCR기술을 활용하였습니다. Node.js 환경에서 가장 널리 사용되는 OCR엔진 tesserect.js를 사용했습니다.

이미지에서 글자를 추출하는 부분은 테서랙트 OCR 엔진을 사용하여 구현하였습니다.
여기서 **어떻게 유튜브 영상 속 코드 이미지를 가져올 수 있을까**가 문제가되었습니다.

처음에는 비디오 DOM 요소에 직접 접근하여 canvas를 사용하는 것이었습니다.
웹은 기본적으로 DOM 요소에 직접 접근하여 해당 요소의 현재 상태를 canvas에 그릴 수 있도록 하는데요, 저희는 Iframe으로 유튜브 영상을 임베딩 하고 있기 때문에 외부 리소스 접근 권한 문제로 직접적으로 영상 DOM에 접근이 불가능 했습니다.

이에 생각해낸 방법은 크롤러를 사용할 때 처럼 Puppeteer를 사용해 실제 유튜브 웹 페이지에서 headless browser로 접근하여 스크린샷을 찍어 오는 것 이었습니다.
유튜브 웹 페이지에서 영상은 Iframe이 아닌 Video 태그로 이루어져있기 때문에 DOM에 접근이 가능 하였고, 이를 활용해 유저가 보는 비디오의 비디오id, 현재 영상 재생 시점 두가지 정보를 토대로 유저가 보고있는 영상 시점의 화면을 스크린샷으로 찍어올 수 있었습니다.

<br>

## ⏰ Project timeline

**1주차**

- 아이디어 수집, 선정
- POC 및 주제 관련 조사
- Git 작업 플로우 결정
- 기술 스택 결정
- ESLint, Prettier, Husky 설정
- 칸반 태스크 작성

**2주차**

- 리액트 및 Node.js/Express 환경 세팅
- 헤더 및 메인 페이지 구현
- 수동 크롤러 구현
- 검색 알고리즘 구현 (TF-IDF, BM25)

**3주차**

- 검색 결과 페이지 구현
- 영상 디테일 페이지 구현
- 추천 검색어 기능 구현
- 스펠링 자동 교정 기능 구현
- 관리자 페이지 추가 (관리자 페이지에서 크롤러 ON/OFF 기능 구현)
- 검색 알고리즘 고도화 (BM25F)

**4주차**

- 로그인 기능 및 로그인 시 검색 기록 저장 기능 구현
- AWS 람다 서비스를 활용한 자동 크롤러 구현
- 코드 추출 기능 구현
- 검색 알고리즘 고도화 (Page Rank)

**5주차**

- 플러터로 앱 구현

1. 메인 페이지: 플러터
2. 검색 결과, 디테일 페이지: Webview
