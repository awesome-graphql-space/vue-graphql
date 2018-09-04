import styled from 'vue-styled-components';

export const Header1 = styled.h1`
  margin: 50px;
  font-family: 'Open Sans', -apple-system, 'BlinkMacSystemFont', 'Arial', sans-serif;
`;

export const Card = styled.section`
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  margin: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  border-bottom: 1px solid #e6ecf0;
  cursor: pointer;
  min-height: 51px;
  padding: 9px 12px;
  background-color: #fff;
  &:hover {
    background-color: #f5f8fa;
  }
`;

export const TextPara = styled.p`
  text-align: left;
  padding: 5px;
`;

export const HeaderStyle = styled.div`
  background-color: #009cfa;
  height: 50px;
  padding: 20px;
  color: white;
  font-size: 24px;

  font-family: 'Open Sans', -apple-system, 'BlinkMacSystemFont', 'Arial', sans-serif;
`;

export const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 70px;
  font-size: 1.5em;
  color: black;
  background-color: white;
`;

export const Form = styled.form`
  margin-top: 40px;
`;

export const Button = styled.button`
  height: 30px;
  padding: 10px;
  font-size: 16px;
  background-color: #009cfa;
  color: white;
  border-radius: 5px;
  padding: 0 10px;
`;

export const Input = styled.input`
  height: 30px;
  padding: 0 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  display: block;
  margin: 10px auto;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    font-size: 14px;
    vertical-align: middle;
  }
`;

export const PrimaryButton = styled.button`
  display: inline-block;
  border: 1px solid #1da1f2;
  color: #fff;
  border-radius: 100px;
  box-shadow: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  background-color: #ec4972;
  border-color: transparent;
  margin: 12px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
`;
export const Section = styled.section`
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  background-color: #e81c4f;
  background: rgba(232, 28, 79, 0.1);
`;

export const Flex = styled.div`
  display: flex;
  flex: grow;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  direction: row;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  border-color: #f5a4b8;
  box-shadow: 0 0 0 1px #f5a4b8;
`;
