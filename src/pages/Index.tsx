
import { useState } from 'react';
import { Upload, Shield, Zap, Globe, FileText, Image, Link, Brain, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [analysisText, setAnalysisText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Uses Amazon Bedrock Claude/Titan models for advanced threat analysis"
    },
    {
      icon: Shield,
      title: "Scam Protection",
      description: "Identifies cryptocurrency scams, fake news, and fraudulent content"
    },
    {
      icon: Globe,
      title: "Decentralized Infrastructure",
      description: "Hosted on Akash Network for censorship-resistant analysis"
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Get instant results with our lightning-fast detection engine"
    }
  ];

  const techStack = [
    { name: "Amazon Bedrock", color: "bg-orange-500" },
    { name: "Akash Network", color: "bg-red-500" },
    { name: "CDP Wallet", color: "bg-blue-500" },
    { name: "Claude AI", color: "bg-purple-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Web3", color: "bg-green-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ChainCheck.AI
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:text-cyan-400">
                Features
              </Button>
              <Button variant="ghost" className="text-white hover:text-cyan-400">
                API
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30">
              Powered by AI & Blockchain
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Detect Scams &
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Fake News with AI
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              ChainCheck.AI uses advanced LLMs on decentralized infrastructure to analyze content, 
              detect scams, and protect the Web3 community from misinformation and fraud.
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {techStack.map((tech, index) => (
              <Badge 
                key={index}
                className={`${tech.color} text-white px-3 py-1 text-sm hover:scale-105 transition-transform`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/5 border-white/10 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white mb-2">
                Analyze Content for Threats
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Upload files, paste text, or share URLs to detect scams and fake news
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="text" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-black/20">
                  <TabsTrigger value="text" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300">
                    <FileText className="w-4 h-4 mr-2" />
                    Text
                  </TabsTrigger>
                  <TabsTrigger value="file" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300">
                    <Upload className="w-4 h-4 mr-2" />
                    File Upload
                  </TabsTrigger>
                  <TabsTrigger value="url" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300">
                    <Link className="w-4 h-4 mr-2" />
                    URL
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="text" className="space-y-4 mt-6">
                  <Textarea
                    placeholder="Paste tweet content, social media post, or any text you want to analyze..."
                    value={analysisText}
                    onChange={(e) => setAnalysisText(e.target.value)}
                    className="min-h-32 bg-black/20 border-white/20 text-white placeholder-gray-400 focus:border-cyan-500"
                  />
                </TabsContent>

                <TabsContent value="file" className="space-y-4 mt-6">
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-cyan-500/50 transition-colors">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept="image/*,.pdf,.txt,.docx"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Image className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-gray-300 mb-2">
                        {selectedFile ? selectedFile.name : "Drop files here or click to upload"}
                      </p>
                      <p className="text-sm text-gray-500">
                        Supports images, PDFs, text files, and documents
                      </p>
                    </label>
                  </div>
                </TabsContent>

                <TabsContent value="url" className="space-y-4 mt-6">
                  <Input
                    placeholder="https://twitter.com/... or any URL to analyze"
                    className="bg-black/20 border-white/20 text-white placeholder-gray-400 focus:border-cyan-500"
                  />
                </TabsContent>

                <div className="mt-6">
                  <Button 
                    onClick={handleAnalysis}
                    disabled={isAnalyzing}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 text-lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Analyzing with AI...
                      </>
                    ) : (
                      <>
                        <Brain className="w-5 h-5 mr-2" />
                        Analyze Content
                      </>
                    )}
                  </Button>
                </div>

                {/* Mock Results */}
                {isAnalyzing && (
                  <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-300">Scanning for threats and misinformation...</span>
                    </div>
                  </div>
                )}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powered by cutting-edge technology to keep you safe in the Web3 ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Web3 Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users protecting themselves from scams and misinformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-3">
              Start Free Analysis
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-semibold text-white">ChainCheck.AI</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 ChainCheck.AI. Powered by decentralized AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
