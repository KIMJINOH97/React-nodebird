import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';
// 모든 파일들이 부모 component로 사용한다.
// app.js 는 모든 페이지에 공통적으로 적용 됨. 중앙 통제실도 redux를 연결 해줘야함 app.js가 공유하기 때문에

// store을 넣어 줄게 없으므로 npm i next-redux-wrapper로 해준다.
const Nodebird = ({ Component, pageProps }) => {
    // props로 Component를 받는다.
    return (
        // store 는 리덕스 state임 자식 component는 중앙통제실 state를 다 받는 거임 최상위 부모이기 때문
        <>
            <Head>
                <title>Node bird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
            </Head>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </>
    );
};
// 부모로부터 올바른 자료형을 받았는지 확인
Nodebird.propTypes = {
    Component: PropTypes.elementType.isRequired, // 노드로 가능한 것 : 랜더링으로 할 수 있는 모든 것 tag 쓰는 애들 >> elementType
    //store: PropTypes.object.isRequired,
    pageProps: PropTypes.object.isRequired,
};

Nodebird.getInitialProps = async (context) => {
    // next에서 context를 내려줌
    // geinitialprops 실행 위함.
    console.log(context);
    const { ctx } = context;
    let pageProps = {};
    if (context.Component.getInitialProps) {
        pageProps = await context.Component.getInitialProps(ctx); // nodebird안의 component에 추가
    }
    return { pageProps }; // component의 props가 됨 위에서 받을 수 있음 tag = '' 이런것을 nodebird에 넣어주고 component에 다시 넣어줌
};

export default wrapper.withRedux(Nodebird);
// 고위 컴퍼넌트라고 부름 기존 컴퍼넌트의 기능을 확장해줌.
// export default withRedux((initialState, options) => {
//     const store = createStore(reducer, initialState);
//     // 리듀서들을 만들었는데(state들이 어떻게 동작하는지) 이 위의것 두개 합친게 store
//     // 여기에다가 store 커스터마이징
//     return store;
// })(Nodebird);
// 노드버드에 store을 props로 넣어준다고 생각하면 됨

// hot(NumberBaseBall); 실시간으로 업데이트 가능한 기능
