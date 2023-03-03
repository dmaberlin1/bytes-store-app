import React from 'react';
import {Link, useLocation} from "react-router-dom";
import logoIntel from '../../assets/img/logo/intel.svg'
import iconCart from '../../assets/img/icons/cart-4-svgrepo-com.svg'
import iconDots from '../../assets/img/icons/dots-9-svgrepo-com.svg'
import iconUser from '../../assets/img/icons/user-2-svgrepo-com.svg'
import iconHeart from '../../assets/img/icons/heart-svgrepo-com.svg'
import iconCompare from '../../assets/img/icons/scales-fill-svgrepo-com.svg'




import Search from "../Search";
import {useSelector} from "react-redux";
import {selectCart} from "../../redux/cart/selectors";

const Header = () => {

    const{items,totalPrice}=useSelector(selectCart);
    const location=useLocation()
    const isMounted=React.useRef(false)
    const totalCount=items.reduce((sum:number,item:any)=>sum+item.count,0)

    React.useEffect(()=>{
        if(isMounted.current){
            const json=JSON.stringify(items);
            localStorage.setItem('cart',json)
        }
        isMounted.current=true;
    },[items])



    //тут будет бургер меню с выбором пунктов из панели юзера
    const handlerUserPanel=()=>{

    }


    return (
        <div className={'header'}>
        <div className="container"></div>
            <Link to={'/'}>
                <div className="header__logo">
                    <img  src={logoIntel} alt={'logoHeader'}/>
                    <div>
                        <h1>Byte Store</h1>
                        <p>Best new tech.</p>
                    </div>
                </div>

            </Link>
            <div className={'header__catalog'}>
                <img  src={iconDots} alt={'dots'}/>
                <p>Каталог</p>
            </div>
            {location.pathname !=='/cart' && <Search/>}
                <div className="header__userPanel">
                    <button onClick={handlerUserPanel} >
                        <img src={iconUser} alt=""/>
                    </button>
                </div>
                <div className="header__compare">
                    <Link to={'/ProductCompare'} className={'button button--cart'}>
                        <span>0 ₴</span>
                        <div className={'button__delimiter'}></div>
                        <img src={iconCompare} alt="iconCart"/>
                    </Link>
                </div>
                <div className="header__favorites">
                    <Link to={'/userpanel/wishlist'} className={'button button--cart'}>
                        <span>0 ₴</span>
                        <div className={'button__delimiter'}></div>
                        <img src={iconCart} alt="iconCart"/>
                    </Link>
                </div>

                <div className="header__cart">
                    {location.pathname !== '/cart' && (
                        <Link to={'/cart'} className={'button button--cart'}>
                            <span>0 ₴</span>
                            <div className={'button__delimiter'}></div>
                            <img src={iconCart} alt="iconCart"/>
                        </Link>
                    )}
                </div>
        </div>
    );
};

export default Header;
