import styled from "styled-components";

/* 
я предпочитаю использовать scss и styled-components т.к второе иногда может лучше подходить под конкретные задачи.
в этом случае нам бы пришлось писать полноценный компонент с интерфейсом и scss без styled-components

*/

const Container = styled.div`
  max-width: 968px;
  margin: 0 auto;
`;

export default Container;
