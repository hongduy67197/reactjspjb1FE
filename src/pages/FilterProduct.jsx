import React, { useEffect, useState } from 'react'
import '../asset/css/base.css'
import '../asset/css/main.css'
import '../asset/css/grid.css'
import '../asset/css/responsive.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { ConsoleSqlOutlined } from '@ant-design/icons'
let trig = 0;
let trig1 = 0;
let trig2 = 0;
let trig3 = 0;
let trig4 = 0;
let trig5 = 0;
let commonButton;
let newstButton
let salestButton
function FilterProduct(props) {
    // -------------------function biến đổi tiếng việt có dấu thành không dấu.
    function removeAccents(str) {
        var AccentsMap = [
            "aàảãáạăằẳẵắặâầẩẫấậ",
            "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
            "dđ", "DĐ",
            "eèẻẽéẹêềểễếệ",
            "EÈẺẼÉẸÊỀỂỄẾỆ",
            "iìỉĩíị",
            "IÌỈĨÍỊ",
            "oòỏõóọôồổỗốộơờởỡớợ",
            "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
            "uùủũúụưừửữứự",
            "UÙỦŨÚỤƯỪỬỮỨỰ",
            "yỳỷỹýỵ",
            "YỲỶỸÝỴ"
        ];
        for (var i = 0; i < AccentsMap.length; i++) {
            var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            var char = AccentsMap[i][0];
            str = str.replace(re, char);
        }
        return str;
    }

    let navigate = useNavigate();
    function movePage(i) {
        navigate(`/product/filter/${i}`)
    }
    function filterPages(i, key, e) {
        e.target.classList.toggle('myStyle')
        let link = window.location.href.replace('http://localhost:3000', '')
        if (!link.includes('?')) {
            console.log(151, i)
            link += `?${key}=${i.split(' ').join('')}`
        } else {
            const checkLink = link.split('?')[1].split('&')
            console.log(154, checkLink)
            if (link.includes(`${key}=`)) {
                const listKey = checkLink.map((value) => {
                    const keyItem = value.split('=')[0]
                    if (key === keyItem && !value.split('%20').join('').includes(i.split(' ').join(''))) {
                        console.log(158, value, i)
                        value += `,${i.split(' ').join('')}`
                    } else
                        if (key === keyItem && value.split('%20').join('').includes(i.split(' ').join(''))) {
                            console.log(163, value, i)
                            if (value.includes(`,${i}`) || value.includes(`,`)) {
                                let a = value.split('%20').join('').replace(`,${i.split(' ').join('')}`, ``)
                                console.log(163, value, i)
                                value = a;
                                let b = value.split('%20').join('').replace(`${i.split(' ').join('')},`, ``)
                                console.log(169, value, b)
                                value = b;
                            } else {
                                console.log(1234)
                                return 0;
                            }
                        }
                    console.log(166, value)
                    return value


                })
                console.log(179, listKey[0])
                if (listKey[0] === 0) {
                    link = '/product/filter'
                } else {
                    link = '/product/filter?' + listKey.join('&')
                    let l = link.replace('&0', '')
                    link = l;
                }
            } else {
                link += `&${key}=${i.split(' ').join('')}`
            }
        }
        navigate(link)
    }
    
    //---------------------------------------------------------phân tích và lọc  diomain để tạo ra trường lọc object với các giá trị được choose  
    let a1 = window.location.href.replace('http://localhost:3000/product/filter?', '')
    let examine = window.location.href.replace('http://localhost:3000/product/filter', '')
    if (examine === '') {
        var a3 = [
            { brand: ['Iphone', 'Samsung', 'Oppo', 'Vivo', 'Xiaomi', 'Realmi', 'Nokia', 'Itel', 'masstel'] },
        ]
        console.log('da vao a3')//test
        console.log(a3)//test
    } else {
        console.log('da vao a3-2')//test
        let a2 = a1.split('&')
        var a3 = a2.map((val, i) => {
            let a4 = val.split('=')
            let a6 = a4[0]
            a4.shift()
            console.log(244, a4)
            let a7 = a4[0].split(',')
            let a5 = { [a6]: a7 }
            return (a5)
        })
        console.log(203, a3)
    }
    //----------------------------------------------------function xử lí lọc qua chỉ mục truyền vào các chỉ mục lọc và lọc trong data những dữ liệu thỏa mãn dk
    function handleDataFollowFiler(data, ref) {
        console.log(256, data, ref)
        let containerFilter = [];
        for (var item of ref) {
            var keyprime;
            console.log(261, item)
            for (let key in item) {
                keyprime = key
                console.log(keyprime)
            }
            let temp = item[Object.keys(item)[0]]
            console.log(263, temp)

            temp.forEach((val, i) => {
                let newArray = data.filter((vallll) => {
                    console.log(272, vallll, keyprime, vallll[keyprime], keyprime)
                    console.log(273, val)
                    let param1 = removeAccents(vallll[keyprime])
                    let param2 = val
                    console.log(275, param1, param2)
                    return param1.split(' ').join('') === param2
                })
                containerFilter.push(...newArray)
            })

        }
        const uniqueSet = new Set(containerFilter);
        const backToArray = [...uniqueSet];
        console.log(285, backToArray)
        return backToArray
    }



    useEffect(() => {
        newstButton = document.querySelector('.newestButton')
        salestButton = document.querySelector('.salestButton')
        commonButton = document.querySelector('.commonButton')
        commonButton.classList.add('btn--primary')
    }, [])


    // ---------------------------------------------------xử lí sau khi lọc xong thì  sort lại. trình tự là lọc xong các chỉ mục và đối chiếu sang sort
    var myJSON = JSON.parse(JSON.stringify(handleDataFollowFiler(props.dataval, a3))); //sao chép 
    myJSON.sort((a, b) => {
        // console.log(326, a, b)
        return a.storage - b.storage // tạm thời sort theo storage vì chưa có trường PHỔ BIẾN
    })
    //-----------------------------------------------------check xem nút ở bên sort có đc on hay không để thay đổi dữ liệu render theo đúng tính chất
    useEffect(() => {
        if (newstButton.classList.contains('btn--primary')) {
            myJSON.sort((a, b) => {
                return new Date(a.createDate).getTime() - new Date(b.createDate).getTime()
            })
        }
        if (salestButton.classList.contains('btn--primary')) {
            myJSON.sort((a, b) => {
                console.log(326, a, b)
                return b.countSold - a.countSold
            })
        }
    }, [window.location.href])


    console.log(217, myJSON)
    //--------------------------------------- sử dụng useState và useEffect để lắng nghe thay đổi phía đường dẫn rồi từ đó render lại theo trường đc sort
    const [stateSort, setStateSort] = useState(myJSON)
    useEffect(() => {
        setStateSort(myJSON)
    }, [window.location.href])

    function removeClass(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].classList.contains('btn--primary')) {
                arr[i].classList.remove('btn--primary')
            }
        }
    }

    const [count, setCount] = useState(trig)

    function sortNewst(e) {
        console.log(324, salestButton, commonButton)
        removeClass([salestButton, commonButton])
        e.target.classList.add('btn--primary')

        myJSON.sort((a, b) => {
            return new Date(a.createDate).getTime() - new Date(b.createDate).getTime()
        })
        console.log(2222)
        setStateSort([...myJSON])
        setCount(trig + 1)
        trig1++
    }

    function sortBestSale(e) {
        removeClass([newstButton, commonButton])

        e.target.classList.add('btn--primary')
        console.log(1111)
        myJSON.sort((a, b) => {
            console.log(326, a, b)
            return b.countSold - a.countSold
        })
        console.log(329, myJSON)
        console.log(330, trig)
        console.log(2222)
        setStateSort([...myJSON])
        setCount(trig + 1)
        trig2++
    }

    function sortCommon(e) {
        removeClass([newstButton, salestButton])
        e.target.classList.add('btn--primary')
        console.log(1111)
        myJSON.sort((a, b) => {
            console.log(326, a, b)
            return a.storage - b.storage
        })
        setStateSort([...myJSON])
        setCount(trig + 1)
        trig3++
    }

    function sortIncressePrice(e) {
        document.querySelector('.select-input__label').innerHTML = 'Giá:    Thấp đến cao'
        document.querySelector('.select-input__label').classList.add('select-input__label-change-color')
        console.log(1111)
        myJSON.sort((a, b) => {
            console.log(326, a, b)
            return a.price - b.price
        })
        console.log(329, myJSON)
        console.log(330, trig)
        console.log(2222)
        setStateSort([...myJSON])
        setCount(trig + 1)
        trig4++
    }
    function sortDicreasePrice(e) {
        document.querySelector('.select-input__label').innerHTML = 'Giá:    Cao đến thấp'
        document.querySelector('.select-input__label').classList.add('select-input__label-change-color')
        console.log(1111)
        myJSON.sort((a, b) => {
            console.log(326, a, b)
            return b.price - a.price
        })
        console.log(329, myJSON)
        console.log(330, trig)
        console.log(2222)
        setStateSort([...myJSON])
        setCount(trig + 1)
        trig5++
    }

    return (
        <div>
            {/* <!-- phần body--> */}
            <div class="app__container">
                {/* <!-- phần container items --> */}
                <div class="grid wide">
                    <div class="row sm-gutter app__content">
                        <div class="col l-2 m-0 c-12">
                            <nav class="category">
                                <h4 class="category__heading">
                                    <i class="category__heading-icon fa-solid fa-filter"></i>
                                    BỘ LỌC TÌM KIẾM
                                    <div class='title-filter'></div>
                                </h4>
                                <ul class="category-list">

                                    {/* category-item--active */}
                                    <li class="category-item ">
                                        <div class="category-item_link">
                                            
                                            <div class='title-filter'>BRAND</div>
                                            <div className="category-item-detail-wrap">
                                                {props.filter.brand.map((val, i) => {
                                                    return <button key={val} onClick={(e) => { filterPages(removeAccents(val), 'brand', e) }} className="category-item-detail">{val}</button>
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-item ">
                                        <div class="category-item_link">
                                            
                                            <div class='title-filter'>GIÁ</div>
                                            <div className="category-item-detail-wrap">
                                                {props.filter.price.map((val, i) => {
                                                    return <button key={val} onClick={(e) => { filterPages(removeAccents(val), 'priceReferent', e) }} className="category-item-detail">{val}</button>
                                                })}
                                            </div>

                                        </div>
                                    </li>
                                    <li class="category-item ">
                                        <div class="category-item_link">
                                           
                                            <div class='title-filter'>LOẠI ĐIỆN THOẠI</div>
                                            <div className="category-item-detail-wrap">
                                                {props.filter.productType.map((val, i) => {
                                                    return <button key={val} onClick={(e) => { filterPages(removeAccents(val), 'productType', e) }} className="category-item-detail">{val}</button>
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-item ">
                                        <div class="category-item_link">
                                            <div class='title-filter'>HIỆU NĂNG & PIN</div>
                                            <div className="category-item-detail-wrap">
                                                {props.filter.performanceProduct.map((val, i) => {
                                                    return <button key={val} onClick={(e) => { filterPages(removeAccents(val), 'performanceProduct', e) }} className="category-item-detail">{val}</button>
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-item ">
                                        <div class="category-item_link">
                                            <div class='title-filter'>RAM</div>
                                            <div className="category-item-detail-wrap">
                                                {props.filter.ram.map((val, i) => {
                                                    return <button onClick={(e) => { filterPages(removeAccents(val), 'ram', e) }} className="category-item-detail">{val}</button>
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-item ">
                                        <div class="category-item_link">
                                            <div class='title-filter'>BỘ NHỚ TRONG</div>
                                            <div className="category-item-detail-wrap">
                                                {props.filter.rom.map((val, i) => {
                                                    return <button key={val} onClick={(e) => { filterPages(removeAccents(val), 'rom', e) }} className="category-item-detail">{val}</button>
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-item ">
                                        <div class="category-item_link">
                                            <div class='title-filter'> CAMERA</div>
                                            <div className="category-item-detail-wrap">
                                                {props.filter.cameraProduct.map((val, i) => {
                                                    return <button key={val} onClick={(e) => { filterPages(removeAccents(val), 'cameraProduct', e) }} className="category-item-detail">{val}</button>
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-item ">
                                        <div class="category-item_link">
                                            <div class='title-filter'> TÍNH NĂNG ĐẶC BIỆT</div>
                                            <div className="category-item-detail-wrap">
                                                {props.filter.specialFeatures.map((val, i) => {
                                                    return <button key={val} onClick={(e) => { filterPages(removeAccents(val), 'specialFeatures', e) }} className="category-item-detail">{val}</button>
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-item ">
                                        <div class="category-item_link">
                                            <div class='title-filter'>THIẾT KẾ</div>
                                            <div className="category-item-detail-wrap">
                                                {props.filter.design.map((val, i) => {
                                                    return <button key={val} onClick={(e) => { filterPages(removeAccents(val), 'design', e) }} className="category-item-detail">{val}</button>
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-item ">
                                        <div class="category-item_link">
                                            <div class='title-filter'> MÀN HÌNH</div>
                                            <div className="category-item-detail-wrap">
                                                {props.filter.panel.map((val, i) => {
                                                    return <button key={val} onClick={(e) => { filterPages(removeAccents(val), 'panel', e) }} className="category-item-detail">{val}</button>
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div class="col l-10 m-12 c-12">
                            <div class="home-filter hide-on-moble-tablet">

                                <span class="home-filter__label">Sắp xếp theo</span>
                                <button class="home-filter_btn btn commonButton" onClick={(e) => { sortCommon(e) }}>Phổ biến</button>
                                <button class="home-filter_btn btn newestButton" onClick={(e) => { sortNewst(e) }}>Mới nhất</button>
                                <button class="home-filter_btn btn salestButton" onClick={(e) => { sortBestSale(e) }}>Bán chạy</button>

                                <div class="select-input">
                                    <button class="select-input__label">Giá</button>
                                    <i class="home-filter-select-icon fas fa-chevron-down">
                                    </i>
                                    {/* <!-- List option sort  --> */}
                                    <ul class="select-input__list">
                                        <li class="select-input__item">
                                            <button class="select-input__link IncressePrice" onClick={(e) => { sortIncressePrice(e) }}>Giá : Thấp đến cao</button>
                                        </li>
                                        <li class="select-input__item">
                                            <button class="select-input__link DicreasePrice" onClick={(e) => { sortDicreasePrice(e) }}>Giá : Cao đến thấp</button>
                                        </li>
                                    </ul>
                                </div>

                                <div class="home-filter__page">
                                    <span class="home-filter__page-num">
                                        <span class="home-filter__page-current">1</span>/14
                                    </span>
                                    <div class="home-filter__page-control">
                                        <a class="home-filter__page-btn home-filter__page-btn--disable">
                                            <i class="home-filter__page-icon fas fa-chevron-left"></i>
                                        </a>
                                        <a class="home-filter__page-btn">
                                            <i class="home-filter__page-icon fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>

                            

                            {/* <!-- home product --> */}
                            <div class="home-product">
                                <div class="row sm-gutter">

                                    {/* <!-- product item --> */}

                                    {stateSort.map((val, i) => {
                                        {
                                            props.changeFilterData(stateSort)
                                        }
                                        {/* {props.dataval.map((val, i) => { */ }



                                        return (<div class="col l-2-4 m-4 c-12">
                                            <button onClick={() => { movePage(removeAccents(val.productName).split(' ').join('')) }} class="home-product-item">
                                                <div >
                                                    <img class="home-product-item__img" src={`http://localhost:3150${val.thumNail}`} alt="" />
                                                </div>
                                                <h4 class="home-product-item__name">{val.productName}</h4>
                                                <div class="home-product-item__price">
                                                    <div className="home-product-item__price-wrap">
                                                    <span class="home-product-item__price-old">{val.price.toLocaleString()} đ</span>
                                                    <span class="home-product-item__price-curr">{(val.price * (100 - (Number.parseFloat(val.Sale))) / 100).toLocaleString()}<sup> đ</sup></span>
                                                    </div>
                                                    <div class="home-product-item__sale-off">
                                                        <span class="home-product-item__sale-off-percent">-{val.Sale}</span>
                                                        <span class="home-product-item__sale-off-label">GIẢM</span>
                                                    </div>
                                                </div>
                                                <div class="home-product-item__action">
                                                    {/* icon heart like */}
                                                    {/* <span class="home-product-item__like home-product-item__like--liked">
                                                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                        <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                    </span> */}
                                                    <div class="home-product-item__rating">
                                                        <i class="home-product-item__star--rate far fa-star"></i>
                                                        <i class="home-product-item__star--rate far fa-star"></i>
                                                        <i class="home-product-item__star--rate far fa-star"></i>
                                                        <i class="home-product-item__star--rate far fa-star"></i>
                                                        <i class=" far fa-star"></i>
                                                    </div>
                                                    <div class="home-product-item_sold">Đã bán {val.countSold}</div>
                                                </div>
                                                {/* <div class="home-product-item__origin">
                                                    <span class="home-product-item__brand">{val.productType}</span>
                                                    <span class="home-product-item__origin-name">{val.createDate}</span>
                                                </div> */}
                                                {/* vị trí đặt tape yêu thích góc card */}
                                                {/* <div class="home-product-item__favourite">
                                                    <i class="fas fa-check"></i>
                                                    <span>Yêu thích</span>
                                                </div> */}

                                                {/* information details */}
                                                <div className="home-product-item-information-detail-wrap">
                                                    <ul class="home-product-item-information-detail">
                                                        {/* <li><span>{val.panel}</span></li> */}
                                                        <li><span>{val.performanceProduct}</span></li>
                                                        <li><span>{val.cameraProduct}</span></li>
                                                    </ul>
                                                </div>

                                            </button>
                                        </div>
                                        )
                                    })}



                                    <div class="col l-2-4 m-4 c-6">
                                    </div>
                                </div>
                            </div>

                            {/* <!-- thanh đánh trang --> */}
                            <ul class="pagination home-product-pagination">
                                <li class="pagination-item">
                                    <a class="pagination-item__link">
                                        <i class="pagination-item__icon fas fa-chevron-left"></i>
                                    </a>
                                </li>
                                <li class="pagination-item pagination-item--active">
                                    <a class="pagination-item__link">1</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">2</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">3</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">4</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">5</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">...</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">14</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">
                                        <i class="pagination-item__icon fas fa-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default FilterProduct