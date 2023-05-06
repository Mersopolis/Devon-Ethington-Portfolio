import { openDB } from 'idb';

const initdb = async () =>
// We are creating a new database named 'messages' which will be using version 1 of the database.
  openDB('messages', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('messages')) {
        console.log('messages database already exists');
        return;
      }

      // Create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
      db.createObjectStore('messages', { keyPath: 'id', autoIncrement: true });
      console.log('messages database created');
    },
  });
  
  export const postDb = async (content) => {
    console.log('Post to the database');
    const messagesDb = await openDB('messages', 1);
    const tx = messagesDb.transaction('messages', 'readwrite');
    const store = tx.objectStore('messages');
    const request = store.add({ message: content });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  };
  
  export const getAllDb = async () => {
    console.log('GET all from the database');
    const messagesDb = await openDB('messages', 1);
    const tx = messagesDb.transaction('messages', 'readonly');
    const store = tx.objectStore('messages');
    const request = store.getAll();
    const result = await request;
    console.log('result.value', result);
    return result;
  };
  
  export const getOneDb = async (id) => {
    console.log('GET from the database');
    const messagesDb = await openDB('messages', 1);
    const tx = messagesDb.transaction('messages', 'readonly');
    const store = tx.objectStore('messages');
    const request = store.get(id);
    const result = await request;
    console.log('result.value', result);
    return result;
  };
  export const deleteDb = async (id) => {
    console.log('DELETE from the database', id);
    const messagesDb = await openDB('messages', 1);
    const tx = messagesDb.transaction('messages', 'readwrite');
    const store = tx.objectStore('messages');
    const request = store.delete(id);
    const result = await request;
    console.log('result.value', result);
    return result;
  };
  
  export const putDb = async (id, content) => {
    console.log('PUT to the database');
    const messagesDb = await openDB('messages', 1);
    const tx = messagesDb.transaction('messages', 'readwrite');
    const store = tx.objectStore('messages');
    const request = store.put({ id: id, message: content });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  };

initdb();
