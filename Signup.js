app.post("/api/user", async (req, res) => {
    try {
      const { username, email, password,confirmpassword} = req.body;
  
      
      const hashedPassword = await bcrypt.hash(password,confirmpassword,10);
  
      const newUser = new UserModel({ username, email, password,confirmpassword: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error registering user", error });
    }
  });
  