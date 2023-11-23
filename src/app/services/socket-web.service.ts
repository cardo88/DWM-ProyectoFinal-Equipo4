import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// import { Socket } from 'ngx-socket-io';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class SocketWebService{
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:5050'); // Reemplaza con la URL de tu servidor
  }

  public getSocket(): Socket {
    return this.socket;
  }
}



// export class SocketWebService extends Socket {


  // @Output() outEven: EventEmitter<any> = new EventEmitter();
  // constructor(
  //   public cookieService: CookieService,

  // ) {
  //   super({
  //     url: 'http://localhost:5000',
  //     options: {
  //       query: {
  //         nameRoom: cookieService.get('room')
  //       },
  //     }
  //   })
  //   this.listen();
  //   console.log("listen websocket");
  // }

  // listen = () => {
  //   this.ioSocket.on('evento', (res: any) => this.outEven.emit(res));   
  // }

  // emitEvent = (payload = {}) => {
  //   this.ioSocket.emit('evento', payload)
  // }
// }

