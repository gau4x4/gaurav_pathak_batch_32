public class Main {
    String name;
    Main(String name){
        this.name = name;
    }
    String getName(){
        
        return name;
    }
    
    public static void main(String obj[]) {
        Main obj1 = new Main("Lulli");
        System.out.println("Price-"+obj1.name);
    }
}
