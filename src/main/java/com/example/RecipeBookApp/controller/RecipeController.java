package com.example.RecipeBookApp.controller;

import com.example.RecipeBookApp.dto.IngredientDto;
import com.example.RecipeBookApp.dto.RecipeResponseDto;
import com.example.RecipeBookApp.model.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class RecipeController {
    //TODO TOKEN Z ID
    int id_user = 2;

    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;
    private final IngredientRepository ingredientRepository;
    private final RecipeIngredientRepository recipeIngredientRepository;

    public RecipeController(RecipeRepository recipeRepository, UserRepository userRepository, IngredientRepository ingredientRepository, RecipeIngredientRepository recipeIngredientRepository) {
        this.recipeRepository = recipeRepository;
        this.userRepository = userRepository;
        this.ingredientRepository = ingredientRepository;
        this.recipeIngredientRepository = recipeIngredientRepository;
    }

    @GetMapping("/recipes")
    public List<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

    record NewRecipeRequest(
            Integer userID,
            String type,
            String title,
            List<IngredientDto> ingredients,
            String instruction
 //           MultipartFile image
    ) {

    }

    @PostMapping("/recipes")
    public ResponseEntity<String> addRecipe(@RequestBody NewRecipeRequest request) {
        //System.out.println("Recipe type : " + request.image());
        Recipe recipe = new Recipe();
        recipe.setTitle(request.title());
        recipe.setType(request.type());
        recipe.setInstruction(request.instruction());
        recipe.setUser(userRepository.getReferenceById(request.userID()));
/*          String fileName = "../img/default.jpg";
        try {
            String uploadDirectory = "../img";
          fileName = uploadFile(request.image(), uploadDirectory);
        } catch (IOException e) {
            System.out.println("error : " + e);
        }
        recipe.setImage(fileName);
*/

        Recipe newRecipe = recipeRepository.save(recipe);
        for (IngredientDto ingredient : request.ingredients()) {
            RecipeIngredient recipeIngredient = new RecipeIngredient();
            recipeIngredient.setIdRecipe(newRecipe);
            recipeIngredient.setIdIngredient(ingredientRepository.findByName(ingredient.getName()).orElse(null));
            recipeIngredient.setAmount(ingredient.getQuantity());
            recipeIngredientRepository.save(recipeIngredient);
        }


        return ResponseEntity.ok("recipe added");
    }

    record NewRecipeResponse(
            String type,
            String title,
            List<IngredientDto> ingredients,
            String instruction
    ) {

    }

    @GetMapping("/recipes/{recipeId}")
    public ResponseEntity<RecipeResponseDto> getRecipeById(@PathVariable Integer recipeId) {
        Recipe recipe = recipeRepository.findById(recipeId).orElse(null);
        List<IngredientDto> ingredientDto = recipeIngredientRepository.getListOfIngredients(recipe).orElse(null);
        //Map<String, String> ingredientMapWithName = new HashMap<>();
        //if (ingredientMapWithId != null) {
        //    ingredientMapWithId.forEach((key, value) -> ingredientMapWithName.put(key.getName(), value));
        //}
        RecipeResponseDto recipeResponse = new RecipeResponseDto();
        if(recipe != null) {
            recipeResponse.setTitle(recipe.getTitle());
            recipeResponse.setType(recipe.getType());
            recipeResponse.setListOfIngredients(ingredientDto);
            recipeResponse.setInstruction(recipe.getInstruction());
            System.out.println("Oto nasz response : " + recipeResponse);
            return ResponseEntity.ok(recipeResponse);
        }
        else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping("/ingredients")
    public List<Ingredient> getIngredients() {
        System.out.println(ingredientRepository.findAll());
        return ingredientRepository.findAll();
    }
/*
    public String uploadFile(MultipartFile file, String uploadDirectory) throws IOException {
        // Sprawdź, czy przesłany plik istnieje
        if (file.isEmpty()) {
            throw new IllegalArgumentException("Przesłany plik jest pusty");
        }

        // Generuj unikalną nazwę dla pliku
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        String fileExtension = getFileExtension(fileName);
        String storedFileName = generateUniqueFileName() + fileExtension;

        // Utwórz ścieżkę do miejsca docelowego zapisu pliku
        Path targetPath = Path.of(uploadDirectory, storedFileName);

        // Zapisz plik na serwerze
        Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);

        // Zwróć nazwę zapisanego pliku (możesz ją zapisać w bazie danych lub w innym miejscu)
        return storedFileName;
    }

    private String getFileExtension(String fileName) {
        return fileName.substring(fileName.lastIndexOf("."));
    }

    public static String generateUniqueFileName() {
        // Pobierz aktualną datę i czas
        Date currentDate = new Date();

        // Utwórz format daty i czasu
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd_HHmmss");

        // Wygeneruj unikalny identyfikator
        String uniqueId = UUID.randomUUID().toString();

        // Połącz datę, czas i identyfikator w nazwę pliku
        String fileName = dateFormat.format(currentDate) + "_" + uniqueId;

        return fileName;
    }
    */
}
