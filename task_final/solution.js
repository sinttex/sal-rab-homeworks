// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    //let address = {
    //    street: street,
    //    house: house,
    //    entrance: entrance,
    //    floor: floor,
    //    flat: flat,
    //}
    //let goods = {
    //    id: id,
    //    title: title,
    //    count: count,
    //    price: price,
    //}
    //let nameTel = '';
    //nameTel = `${name} ${phone}`;
    //let complAddress = '';
    //complAddress = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;
    
    let data = {
        client: `${name} ${phone}`,
        order: {
            address: `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`,
            sum: sum, 
        },
        goods: [{
            title: title,
            count: count,
        }]
        
    };
    //for (let i = 0; i <= data.goods.lenght; i++ ){
    data.goods.push({title: goods.title, count: goods.count})
    //}
    
    //data.goods.forEach(element => {
    //   return {title: element.title, count: element.count};
    //}
    
           
    const convertDataToObj = {
        data
    }; 
   
    return JSON.stringify(convertDataToObj);
}