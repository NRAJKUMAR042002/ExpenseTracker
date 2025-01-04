app.post("/api/datas", async (req, res) => {
    try {
      const { email, password } = req.body;
  
 
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ success: false, message: "User not found" });
      }
  
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }
  
      res.status(200).json({ success: true, message: "Login successful!" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error logging in", error });
    }
  });
  