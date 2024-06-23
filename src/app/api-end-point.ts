export class ApiEndPoint{
  public static readonly rootUrl:string = "http://localhost:9090/";

  public static readonly apiPrefix:string="auth/";

  public static readonly accessToken:string = ApiEndPoint.rootUrl+ApiEndPoint.apiPrefix+"token";

}
