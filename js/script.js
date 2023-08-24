// дістаємо елемент, всередині якого відмальовуємо реакт
const rootElement = document.getElementById('root');

//виводимо розмітку з нашим наповненням:
//зверт. до реактДОМ, командою createRoot створюємо точку входу, ставимо в нього наш rootElement, всередині якого плануємо відмалювати щось
//далі команда render для відмальовки
//всередині render пишемо, що саме виводимо в браузер jsx
ReactDOM.createRoot(rootElement).render(<h1>lorem ipsum</h1>);

