app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.50
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
	$scope.mains =[
    {
      name: 'Lobster bisque',
      description: 'Creamy lobster bisque.',
      price: 14.95
    },
    {
      name: 'Tilapia Marsala',
      description: 'Tilapia with mushrooms and marsala wine.',
      price: 19.50
    },
    {
      name: 'Orange Chicken',
      description: 'Orange zest chicken.',
      price: 14.95
    }
  ];
  $scope.extras =[
    {
      name: 'Truffle fries',
      description: 'Fries cooked in truffle oil.',
      price: 7.50
    },
    {
      name: 'ceasar salad',
      description: 'Romaine lettuce and croutons dressed with parmesan cheese, lemon juice, olive oil, egg, Worcestershire sauce, garlic, and black pepper.',
      price: 10.95
    },
    {
      name: 'Stuffed Mushrooms',
      description: 'Breadcrumbs and cheese make these caps extra rich.',
      price: 9.95
    }
  ];     
}]);