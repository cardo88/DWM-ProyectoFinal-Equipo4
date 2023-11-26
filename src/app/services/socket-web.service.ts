import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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

  // Unirse a una room específica
  joinRoom(room: string, nickname: string) {
    this.socket.emit('joinRoom', { room, nickname });
  }

  // Comenzar una partida en una room
  startPlay(room: string, play: any) {
    this.socket.emit('roomStartPlay', { room, play });
  }

  initSocket(roomCode: string, nickname?: string) {
    this.socket.emit('joinRoom', { room: roomCode, nickname });
  }

  closeSocket() {
    this.socket.disconnect();
  }

  // Enviar mensajes genéricos a una room
  sendMessage(room: string, message: any) {
    this.socket.emit('mensaje', { room, message });
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

