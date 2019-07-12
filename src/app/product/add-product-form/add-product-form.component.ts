import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'add-product-form',
    templateUrl: './add-product-form.component.html',
    styleUrls: ['./add-product-form.component.css']
})

export class AddProductFormComponent implements OnInit {
    productId: number = 0;
    productName: string = "";
    productCode: string = "";
    releaseDate: string = "";
    description: string = "";
    price: number = 0;
    starRating: number = 0;
    imageUrl: string = "";

    //child component outputting object
    @Output() onAddProduct:
        EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    form_addProduct(){
        //call the parent's listener method and passes the argument
        //in this case, the argument is a product object (declared manually)
        this.onAddProduct.emit({
            productId: 0,
            productName: this.productName,
            productCode: this.productCode,
            releaseDate: this.releaseDate,
            description: this.description,
            price: this.price,
            starRating: this.starRating,
            imageUrl: this.imageUrl,
        })

        this.productId = 0;
        this.productId = 0;
        this.productName = "";
        this.productCode = "";
        this.releaseDate = "";
        this.description = "";
        this.price = 0;
        this.starRating = 0;
        this.imageUrl = "";
    }
}
