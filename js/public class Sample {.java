public class Sample {
 public static void main(String[] args) {                                      
int a,b,c;
Scanner sc=new Scanner(System.in);
System.out.println("Enter a ,b, c");
sc=a.nextInt();
sc=b.nextInt();
sc=c.nextInt();
if(a>b && a>c){ 
System.out.println(a); 
}else if(b>a && b>c){ 
System.out.println(b); 
}else if(c>a && c>b){ 
System.out.println(c); 
}else{
 System.out.println("All are equal"); 
} }}