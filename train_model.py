import joblib
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

# Data dummy untuk pelatihan
X = np.array([
    [10, 0, 70.0],
    [20, 1, 80.0],
    [30, 0, 90.0],
    [40, 1, 100.0]
])
y = np.array([0, 1, 0, 1])  # Label dummy

# Inisialisasi dan latih model KNN
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# Simpan model ke file
joblib.dump(model, "model.pkl")
print("Model telah disimpan sebagai model.pkl")