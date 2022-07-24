export class response {
    "status": number;
    "message": any;
    "content": any;
    constructor(status: number, message: any, content?: any) {
      this.status = status;
      this.message = message;
      this.content = content;
    }
  }