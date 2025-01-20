import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MesServiceService {

  constructor(private firestore: Firestore) {}

  async getAllServices() {
    const servicesRef = collection(this.firestore, 'services'); // Reference to 'services' collection
    const snapshot = await getDocs(servicesRef); // Fetch documents
    return snapshot.docs.map((doc) => ({
      id: doc.id, // Document name (e.g., 'bricolage')
      ...doc.data(), // Document data (e.g., description field)
    }));
  }

}
