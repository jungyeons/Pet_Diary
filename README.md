# 🐱 Pet_Diary 🐱

[모바일 프로그래밍] 반려동물 일기 애플리케이션 팀 프로젝트 입니다.

### 😉 Team Members

[배정연] jungyeons  
[박지율] ParkJiyul  
[박채윤] diglowc  
[유민재] MinJae713  
[유세열] OxyToxi

### ✏ Commit Message Rules

▫ 날짜, 간단한 작업 내용으로 통일
(ex. 23.05.06. 캘린더 어플리케이션 세부 내용 수정)

[민재]

- 라이브러리 설치(커멘드 창에서 프로젝트 디렉토리 들어간 후에 아래 명령어 쓰세요!) -

1. npm install --save @react-navigation/native (리액트 네비게이션 라이브러리)
2. npm install @react-navigation/stack (스택 네비게이션)
3. npm install @react-navigation/bottom-tabs (탭 네비게이션)
4. npm install react-native-keyboard-aware-scroll-view (텍스트 입력 스크롤로 피해주는 컴포넌트)

- 로그아웃 버튼이 포함된 Header를 src 폴더 안에 header폴더로 만들어두었으니, 아래와 같이 수정 부탁드립니다..!(0615)

1. 각 CheckList, Community js 파일 수정
   => const CheckList(혹은 Community) = ({ navigation }) => {}
2. 각 CheckList, Community의 return문 다음과 같이 수정
   =>
   return (
   <View style={styles.container}>
   <View style={{ marginBottom: 40 }}></View>
   <HeaderComp navigation={navigation} title={"CheckList" 혹은 "Community"} />
   ...(여긴 각자 구현하신 부분이 들어가는 자리입니다!)
   </View>
   );
