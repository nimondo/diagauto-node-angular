export class CheckInfo {
  constructor(
    public id: string,
    public name: string,
    public username: string,
    public email: string,
    public morning: Date,
    public afternoon: Date,
	public users_id: number
  ) {}
}