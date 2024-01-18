const menu = {
    burger: 5.00,
    fries: 3.50,
    shake: 1.11,
    salad: 4.25,

    order(orderPlaced) {
        const orderSplit = orderPlaced.split(',')

        let sum = 0
        for (item of orderSplit) {
            // const cost = this[item]
            // sum = sum + cost
            sum += this[item]
        }
        console.log(sum);
    }

}

menu.order('burger,fries,salad')
menu.order('burger,shake')
