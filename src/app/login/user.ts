export class User {
  username: string;
  password: string;
  role: string;
  email: string;
  session: string;

  constructor(u: string, p: string, r: string, e: string) {
    this.username = u;
    this.password = p;
    this.role = r;
    this.email = e;
  }

  getUsername(): string {
    return this.username;
  }

  setSession(session: string) {
    this.session = session;
  }

  getSession(): string {
    return this.session;
  }

  setRole(role: string) {
    this.role = role;
  }

  getRole(): string {
    return this.role;
  }

  getEMail(): string {
    return this.email;
  }
}
