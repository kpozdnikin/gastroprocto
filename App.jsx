import React from 'react';

class App extends React.Component {
    render() {
        return  <div>
                    <FollowingMenu />
                    <SidebarMenu />
                </div>
    }
}

function FollowingMenu() {
    return (
        <div className="ui large top fixed hidden menu">
            <div className="ui container">
                <a className="active item" href="#main">Главная</a>
                <a className="item">Услуги</a>
                <a className="item">Блог</a>
                <a className="item">Обратная связь</a>
                <div className="right menu">
                    <div className="item">
                        <a className="ui positive button">Войти</a>
                    </div>
                    <div className="item">
                        <a className="ui primary button">Регистрация</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SidebarMenu(){
    return (
        <div>
            <div className="ui vertical inverted sidebar menu">
                <a className="active item" href="#main">Главная</a>
                <a className="item">Услуги</a>
                <a className="item">Блог</a>
                <a className="item">Обратная связь</a>
                <a className="item">Войти</a>
                <a className="item">Регистрация</a>
            </div>
        </div>
    );
}


export default App;