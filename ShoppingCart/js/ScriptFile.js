 
            
               $(function() {
            
                
               
                function Option(name, quantity) {
                    var self = this;
                    self.name = name;
                    self.quantity = ko.observable(quantity);
                }
            
              
                function Product(name, price, quantity, options) {
                    var self = this;
                    self.name = ko.observable(name);
                    self.price = price;
                    self.quantity = ko.observable(quantity);
                    self.options = ko.observableArray(ko.utils.arrayMap(options, function(option) {
                        return new Option(option.name, option.quantity);
                    }));
                    self.addOption = function(name, quantity) {
                        self.options.push(new Option(name, quantity));
                    };
                }
              
                function Category(name, products) {
                    var self = this;
                    self.name = name;
                    self.products = ko.observableArray(ko.utils.arrayMap(products, function(product) {
                        return new Product(product.name, product.price, product.quantity, product.options);
                    }));
                }
            
              
                function Menu(categories) {
                    var self = this;
                    self.categories = ko.observableArray(ko.utils.arrayMap(categories, function(category) {
                        return new Category(category.name, category.products);
                    }));
            
                    self.addCategory = function(name) {
                        self.categories.push(new Category(name));
                  };
                }
            
                function CartLine() {
                    var self = this;
                    self.category = ko.observable();
                    self.product = ko.observable();
                    self.quantity = ko.observable(1);
                    self.subtotal = ko.computed(function() {
                        return self.product() ? self.product().price * parseInt("0" + self.quantity(), 10) : 0;
                    });
                    self.category.subscribe(function() {
                        self.product(undefined);
                    });
                }
            
            
             
                function ViewModel(menus) {
                    var self = this;
                    self.lines = ko.observableArray([new CartLine()]);
                    self.menus = ko.utils.arrayMap(menus, function(menu) {
                        return new Menu(menu.categories);
                    });
                    self.addLine = function() {
                        self.lines.push(new CartLine())
                    };
                    self.removeLine = function(line) {
                        self.lines.remove(line)
                    };
                    self.grandTotal = ko.computed(function() {
                        var total = 0;
                        $.each(self.lines(), function() {
                            total += this.subtotal()
                        })
                        return total;
                    });
                }
                ko.applyBindings(new ViewModel(data));
            
            });
            
            var data = [{
                "categories": [
                    {
                    "name": "Drinks",
                    "products": [{
                            "name": "Coffee",
                            "price": "5.00",
                            "quantity": "0",
                            "options": [{
                                "name": "Sugar",
                                "quantity": "0"
                            },
                            {
                                "name": "Cream",
                                "quantity": "0"
                            }
                        ]},
                    {
                        "name": "Tea",
                        "price": "3.00",
                        "quantity": "0",
                        "options": [{
                            "name": "Sugar",
                            "quantity": "0"
                        },
                        {
                            "name": "Milk",
                            "quantity": "0"
                        }
                        ]}
                    ]},
                {
                    "name": "Food",
                    "products": [
                        {
                        "name": "Donut",
                        "price": "6.00",
                        "quantity": "0",
                        "options": [
                            {
                            "name": "Chocolate",
                            "quantity": "0"},
                        {
                            "name": "Dutchie",
                            "quantity": "0"}
                        ]},
                    {
                        "name": "Muffin",
                        "price": "7.00",
                        "quantity": "0",
                        "options": [
                            {
                            "name": "Bran",
                            "quantity": "0"},
                        {
                            "name": "Carrot",
                            "quantity": "0"}
                        ]}
                    ]}
            
                ]}];
     