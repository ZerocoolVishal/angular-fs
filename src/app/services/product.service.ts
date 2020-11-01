import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCollection: AngularFirestoreCollection<Product>
  products: Observable<Product[]>

  constructor(
    public afs: AngularFirestore
  ) { 
    this.products = this.afs.collection('products').valueChanges();
  }

  getProducts() {
    return this.products;
  }

  addProduct(name, description, quantity) {
    this.afs.collection('products').add({
      name: name,
      description: description,
      quantity: quantity
    });
  }

  deleteProduct(id: string) {
    this.afs.collection("products").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
  }

}
