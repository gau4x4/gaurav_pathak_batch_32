public class Student{
    String Name;
    Student(){
        // this.name= name;
    }
    public String getName(){
        return this.Name;
    }
    public void setName(String Name){
        this.Name = Name;
    }
    public static void main(String[] args){
        Student std = new Student();
        std.setName("Gaurav Pathak");
        System.out.println(std.getName());
    }
}