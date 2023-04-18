# Zerobase_Framework_Mission - React Shop

### 결과물
* <https://reactshop-ten.vercel.app/>

### 특징
* 주어진 쇼핑몰 사이트를 보고 커스터마이징 할 여력은 없을 것 같아 최대한 똑같이 구현하도록 노력
* 구현한 기능
  * 캐러셀
    * 캐러셀 라이브러리 이용하되 캐러셀 안에 들어가는 슬라이드 컴포넌트는 직접 구현
  * 다크모드
    * recoil을 사용해 다크모드 상태를 전역으로 관리하고 localStorage에 저장해서 상태 유지하도록 구현
    * 클래스에 일일히 주는 것 보다는 전역으로 테마를 주는 것이 나을 것이라 생각해 html태그에 모드를 주는 것으로 구현
  * 장바구니 기능
    * 로컬스토리지를 사용해 선택한 상품들을 저장하고 유지시키도록 구현
    * recoil을 사용해 전역으로 관리 -> 처음에 useState를 사용하니 장바구니 페이지에 들어가거나 새로고침 할 때마다 초기화 되는 문제가 발생해서 처음 App.tsx가 렌더링 될 때 로컬스토리지에서 장바구니 상품들이 담겨 있다면 가지고 와서 cartState atom에 저장
  * 검색 기능
    * 모바일에서 검색 버튼을 눌렀을 때 search bar가 토글되도록 구현 및 검색 기능 구현
  * 반응형(모바일)

### 문제 발생 및 해결
* 검색 기능을 구현할 때 문자열과 일치하는 것을 판별하기 위해 includes를 썼으나 결과가 정확히 일치하지 않거나 아예 검색이 되지 않아 정규표현을 사용하니 올바르게 나옴
* 장바구니 기능을 구현할 때 메인 홈페이지에서 상품 카드를 클릭할 때 로컬스토리지에 담긴 장바구니 아이템이 초기화 되는 문제 발생 -> 아마도 상품 카드를 클릭하면 상품 상세 페이지로 들어갈 때 이 상세 페이지가 새로 렌더링 되면서 발생하는 문제라 생각해 상세 페이지가 처음 렌더링 될 때 장바구니에 담겨져 있는 목록을 가져와서 cartState에 저장하도록 수정
* 장바구니 아이콘을 누르거나 장바구니 페이지를 들어갈 때 장바구니가 비어있을 경우 장바구니 상품의 길이에 접근할 수 없다고 오류가 떠 장바구니에 상품이 없거나 빈 배열일 경우와 장바구니에 상품이 있을 경우를 나눠서 수정하니 정상적으로 잘 돌아감

### 문제 발생 및 미해결(!!!!질문입니다. 피드백 부탁드립니다!!!!)
* 우선 가장 큰 문제는 vercel로 배포할 경우 홈에서 다른 페이지로 들어갈 경우에는 잘 들어가지는데 다른페이지를 들어간 상태에서 새로고침을 하면 전부 Not Found 에러 발생 -> 라우트 문제인 건지 vercel.json문제인 건지 여러 방법을 시도해봤지만 해결이 안되었습니다.. 동적으로 생성해서 문제가 발생하는 것 같은데 해결 방법을 모르겠습니다.(영상 첨부)
* 뒤로 가기를 눌렀을 때 스크롤 위치를 저장하는 시도를 했는데 굳이 안해도 적용이 되는 것 같아서 두었더니 어쩔 때는 되고 어쩔 때는 안되는 일이 발생 및 뒤로가기 했을 때 스크롤 위치 유지가 됐을 경우에는 링크를 클릭해서 다른 페이지를 들어갈 경우 상단에서 부터 시작하는게 아니라 하단에서 부터 시작하고 스크롤 위치 유지가 적용이 되지 않았을 때는 다른 페이지를 들어가면 상단부터 시작하는 문제 발생 및 해결을 시도해 보았으나 되지 않았습니다. vercel로 배포한 버전을 확인해보니 뒤로가기를 했을 때 스크롤이 유지되지도 않고 페이지를 스크롤이 내려간 상태에서 페이지를 이동하면 하단에서 부터 시작합니다(영상 첨부)
* Route로 /grocery를 처리할 때 Not Found 페이지를 할당하는 것 보다는 라우트 처리가 되지 않은 모든 링크에 Not Found를 할당하는 것이 더 효율적일 것 같아 그런식으로 진행했는데 개발 환경에서 상품 상세페이지를 들어갈 때 Not Found가 잠깐 먼저 뜨고 그 다음에 상품 정보가 뜨는 문제 발생 -> 이런 경우는 어떻게 해결해야 하는지 더 효율적인 방법이 있는지 궁금합니다(영상 첨부)
* 상품 상세 페이지에서 장바구니 담기 버튼을 눌렀을 때 스크롤이 다시 최상단으로 이동합니다 -> 버튼 이벤트 문제라 생각해 preventDefault를 주었으나 해결되지 않았습니다. 그 외에 자잘하게 수정을 시도 했지만 해결되지 않아 상품 상세페이지 컴포넌트 자체의 문제인지 이벤트 문제인지 원인이 무엇인지 궁금하고 해결방법도 궁금합니다. 다시 실행해보니 잘 됩니다만 왜 해결되었는지 잘 모르겠습니다..

### 그냥 질문
* 라우트처리를 두가지 방식으로 하다가 밑에 코드 방식으로 하니 ProductDetail 컴포넌트에서 해당 부분에 오류가 발생했는데 해결해보려고 했으나 해결되지 않았습니다. 밑에 방식으로 할 때 추가할 코드는 ProductDetail.tsx에 주석처리를 해놨는데 무엇이 문제인지 잘 모르겠습니다. 그리고 map으로 돌려서 라우트를 해주는 것과 밑에 방식으로 하는 것 중에 뭐가 더 효율이 좋은가요? 두 가지 방식으로 했을 때 lighthouse를 돌렸을 때 큰 차이는 없었으나 나중에 데이터의 크기가 커지면 어떤 것이 좋은지 아니면 이보다 더 좋은 방법이 있는지 궁금합니다.
```javascript 
//App.tsx
<Route path={`/product/:id`} element={<ProductDetail></ProductDetail>}></Route>

//ProductDetail.tsx
<ul>
  <li>{Category[item.category]}</li>
  <li>{item.title}</li>
</ul>
```



