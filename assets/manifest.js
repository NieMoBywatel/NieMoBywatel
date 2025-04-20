import org.json.JSONObject;

public class ManifestGenerator {
    public static String generateWebManifest() {
        try {
            JSONObject manifest = new JSONObject();
            manifest.put("name", "");
            manifest.put("short_name", "");
            manifest.put("theme_color", "#f5f6fb");
            manifest.put("background_color", "#f5f6fb");
            manifest.put("display", "standalone");

            return manifest.toString();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
