import pandas as pd
import numpy as np

# Define product categories
categories = ['1', '2', '3', '4', '5']

# Generate random product names
product_names = np.random.choice(['Shirt', 'Jeans', 'T-Shirt', 'Laptop', 'Phone', 'Tablet', 'Sofa', 'Chair', 'Bed', 'Hammer', 'Drill', 'Screwdriver', 'Car', 'Ball'], size=15)

# Generate random product IDs
product_ids = np.random.randint(1, 105, size=15)

# Generate random SKUs
skus = ['ABC-' + str(np.random.randint(10000, 99999)) for _ in range(15)]

# Generate random variant IDs
variant_ids = np.random.randint(1, 5, size=15)

# Generate random prices between $10 and $100
prices = np.random.uniform(10, 100, size=15)

# Generate random discount percentages between 0 and 50
discount_percentages = np.random.randint(0, 51, size=15)

# Generate random descriptions
descriptions = ['A high-quality that is perfect for everyday use.' for _ in range(15)]

# Create a DataFrame
df = pd.DataFrame({
  'product_name': product_names,
  'product_id': product_ids,
  'sku': skus,
  'variant_id': variant_ids,
  'price': prices,
  'discount_percentage': discount_percentages,
  'description': descriptions,
  'category': np.random.choice(categories, size=15)
})

# Write the DataFrame to an Excel file
df.to_excel('products.xlsx', index=False)

print('Excel file created successfully!')
